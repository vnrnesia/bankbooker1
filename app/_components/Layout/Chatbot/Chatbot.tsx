"use client";

import {
  ChevronDown,
  MessageSquareMore,
  DoorOpen,
} from "lucide-react";
import React, {
  useState,
  ReactNode,
  FormEvent,
  useEffect,
  useRef,
} from "react";
import { motion, AnimatePresence } from "framer-motion";

type ChatMessage = {
  id: number;
  from: "bot" | "user" | "loading";
  text: ReactNode;
};

const bounceAnimation = `
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}`;

const LoadingDots = () => (
  <>
    <style>{bounceAnimation}</style>
    <span style={{ display: "inline-flex", gap: 4 }}>
      <span style={{ animation: "bounce 1.2s infinite", animationDelay: "0s" }}>
        .
      </span>
      <span
        style={{ animation: "bounce 1.2s infinite", animationDelay: "0.15s" }}
      >
        .
      </span>
      <span
        style={{ animation: "bounce 1.2s infinite", animationDelay: "0.3s" }}
      >
        .
      </span>
    </span>
  </>
);

const OPTIONS_MAIN = [
  "Apply for Bankbooker",
  "Talk to Sales",
  "Schedule to Demo",
] as const;

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputEmail, setInputEmail] = useState("");
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, showEmailInput, showOptions]);

  // İlk açılışta bot mesajı gönder
  useEffect(() => {
    if (!open || messages.length > 0) return;
    addBotMessageWithLoading("Welcome to Bankbooker, how can I help you today?");
  }, [open]);

  // Bot mesajı geldiğinde ses çal ve ilk mesajdan sonra seçenek göster
  useEffect(() => {
    const last = messages[messages.length - 1];
    if (last?.from === "bot" && audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.play().catch(() => { });
    }

    // Seçenekler sadece ilk bot mesajından sonra gösterilsin ve tekrar çıkmasın
    if (
      last?.from === "bot" &&
      !showEmailInput &&
      !emailSubmitted &&
      messages.length === 1 // sadece ilk bot mesajından sonra seçenek göster
    ) {
      setShowOptions(true);
    }
  }, [messages, showEmailInput, emailSubmitted]);

  const addUserMessage = (text: string) => {
    setMessages((msgs) => [...msgs, { id: msgs.length + 1, from: "user", text }]);
  };

  const addBotMessageWithLoading = (text: ReactNode) => {
    setLoading(true);
    setMessages((msgs) => [
      ...msgs,
      { id: msgs.length + 1, from: "loading", text: <LoadingDots /> },
    ]);

    setTimeout(() => {
      setMessages((msgs) => {
        const cleaned = msgs.filter((m) => m.from !== "loading");
        return [
          ...cleaned,
          { id: cleaned.length + 1, from: "bot", text },
        ];
      });
      setLoading(false);
    }, 2000);
  };

  const handleOptionClick = (option: string) => {
    if (loading) return;
    addUserMessage(option);
    setShowOptions(false);
    setShowEmailInput(false);

    const isEmailFollowup =
      option === "Apply for Bankbooker" ||
      option === "Talk to Sales" ||
      option === "Schedule to Demo";

    if (option === "No thanks, not applying for now.") {
      addBotMessageWithLoading("Thanks for stopping by! Feel free to reach out anytime.");
    } else if (isEmailFollowup) {
      addBotMessageWithLoading(
        <>
          Great to hear! <br /> In case we get disconnected, <b>mind if we grab your email?</b>
        </>
      );
      setTimeout(() => setShowEmailInput(true), 2100);
    }
  };

  const handleEmailSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!inputEmail.trim() || loading) return;

    addUserMessage(inputEmail);
    setShowEmailInput(false);
    setEmailSubmitted(true);

    addBotMessageWithLoading("Thanks! Someone from our team will be in touch soon.");
    setInputEmail("");
  };

  // Son bot mesajı kontrolü Leave Chat için
  const lastBotMessage = [...messages].reverse().find((m) => m.from === "bot");
  const showLeave =
    lastBotMessage?.from === "bot" &&
    typeof lastBotMessage.text === "string" &&
    lastBotMessage.text.includes("Someone from our team");

  return (
    <>
      <audio ref={audioRef} src="/notification.mp3" preload="auto" />

      {/* Floating Button */}
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          width: 56,
          height: 56,
          borderRadius: "50%",
          backgroundColor: "#0070f3",
          color: "white",
          fontSize: 28,
          border: "none",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1000,
        }}
        aria-label={open ? "Close chat" : "Open chat"}
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.div
              key="chevron"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown />
            </motion.div>
          ) : (
            <motion.div
              key="message"
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
              transition={{ duration: 0.3 }}
            >
              <MessageSquareMore />
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      {/* Chat Window */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: 94,
            right: 24,
            width: 360,
            height: 500,
            background: "white",
            borderRadius: 8,
            boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
            display: "flex",
            flexDirection: "column",
            zIndex: 1000,
            fontFamily: "Manrope, sans-serif",
          }}
          aria-live="polite"
          aria-label="Chatbot window"
        >
          <div
            style={{
              background: "white",
              color: "white",
              padding: "12px 16px",
              fontWeight: 700,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              boxShadow: "0 px 6px rgba(0, 0, 0, 0.15)",
            }}
          >

            <span className="text-blue-500">BANK<span className="text-black">BOOKER</span></span>
           
          </div>

          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: 16,
              background: "#f5f8fb",
            }}
          >
            {messages.map(({ id, from, text }) => (
              <React.Fragment key={id}>
                {/* Mesaj başlığı */}
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    marginBottom: 4,
                    color: from === "user" ? "#0070f3" : "#555",
                    textAlign: from === "user" ? "right" : "left",
                    paddingRight: from === "user" ? 8 : 0,
                    paddingLeft: from === "bot" ? 8 : 0,
                  }}
                >
                  {from === "user" ? "You" : "Bankbooker"}
                </div>

                {/* Mesaj balonu */}
                <div
                  style={{
                    textAlign: from === "user" ? "right" : "left",
                    marginBottom: 12,
                  }}
                >
                  <div
                    style={{
                      display: "inline-block",
                      background:
                        from === "user"
                          ? "#0070f3"
                          : from === "loading"
                            ? "#cbd3df"
                            : "#e4e9f2",
                      color:
                        from === "user"
                          ? "white"
                          : from === "loading"
                            ? "#222"
                            : "#222",
                      padding: "10px 16px",
                      borderRadius: 5,
                      fontSize: 14,
                      maxWidth: "80%",
                      wordBreak: "break-word",
                    }}
                  >
                    {text}
                  </div>
                </div>

                {/* İlk bot mesajının hemen altında seçenekler ayrı kutuda */}
                {showOptions && from === "bot" && id === messages[0].id && (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                      gap: 8,
                      maxWidth: "80%",
                      marginBottom: 12,
                      marginLeft: "auto",
                      userSelect: "none",
                    }}
                  >
                    {/* Üstte küçük You */}
                    <div
                      style={{
                        fontSize: 11,
                        fontWeight: 600,
                        color: "#555",
                        marginBottom: 4,
                      }}
                    >
                      You
                    </div>

                    {OPTIONS_MAIN.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => handleOptionClick(opt)}
                        style={{
                          border: "1px solid #0070f3",
                          color: "#0070f3",
                          padding: "6px 12px",
                          borderRadius: 6,
                          background: "white",
                          cursor: "pointer",
                          textAlign: "left",
                          fontSize: 14,
                          fontWeight: 500,
                          minWidth: 160,
                        }}
                        aria-label={opt}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}
              </React.Fragment>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Email input */}
          {showEmailInput && (
            <form
              onSubmit={handleEmailSubmit}
              style={{ display: "flex", padding: 12, gap: 8 }}
            >
              <input
                type="email"
                required
                value={inputEmail}
                onChange={(e) => setInputEmail(e.target.value)}
                placeholder="Your email"
                style={{
                  flex: 1,
                  padding: 10,
                  borderRadius: 8,
                  border: "1px solid #ccc",
                }}
                aria-label="Email input"
              />
              <button
                type="submit"
                style={{
                  background: "#0070f3",
                  color: "white",
                  padding: "10px 16px",
                  border: "none",
                  borderRadius: 6,
                  fontWeight: 600,
                  cursor: "pointer",
                }}
                aria-label="Send email"
              >
                Send
              </button>
            </form>
          )}

          {/* Leave Chat Button */}
          {showLeave && (
            <button
              onClick={() => setOpen(false)}
              style={{
                padding: 12,
                background: "#fff",
                borderTop: "1px solid #ddd",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 8,
                color: "#555",
                fontWeight: 600,
                cursor: "pointer",
                borderBottomLeftRadius: 8,
                borderBottomRightRadius: 8,
              }}
              aria-label="Leave chat"
            >
              <DoorOpen size={18} /> Leave Chat
            </button>
          )}
        </div>
      )}
    </>
  );
}
