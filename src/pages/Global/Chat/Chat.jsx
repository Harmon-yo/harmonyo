import React, { useEffect, useState } from "react";
import { db } from "../../../utils/firebase";
import "./style.css";
import { Box, CircularProgress } from "@mui/material";
import {
  query,
  collection,
  where,
  onSnapshot,
  or,
  orderBy,
} from "firebase/firestore";
import ChatContainer from "../../../components/Chat/ChatContainer";
import ProfileChat from "../../../components/Chat/ProfileChat";
import ChatList from "../../../components/Chat/ChatList";
import { useLocation } from "react-router-dom";

const Chat = (props) => {
  const [activeChat, setActiveChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [nomeChat, setNomeChat] = useState("");
  const [srcChat, setSrcChat] = useState("");
  const [chats, setChats] = useState([]);
  const [bloqueado, setBloqueado] = useState(false);
  const [carregouConversas, setCarregouConversas] = useState(false);
  const [idUsuarioConversa, setIdUsuarioConversa] = useState(0);
  const location = useLocation();
  const idChatAtivo = location.state ? location.state.idChatAtivo : null;
  const chatAtivo = location.state ? location.state.chatAtivo : null;

  useEffect(() => {
    const q = query(
      collection(db, "chats"),
      or(
        where("idProfessor", "==", Number(sessionStorage.idUsuario)),
        where("idAluno", "==", Number(sessionStorage.idUsuario))
      ),
      orderBy("timestamp", "desc")
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setChats("");
      setChats(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: {
            idAluno: doc.data().idAluno,
            idProfessor: doc.data().idProfessor,
            nome:
              (sessionStorage.CATEGORIA === "Aluno") === "aluno"
                ? doc.data().nomeProfessor
                : doc.data().nomeAluno,
            src:
              (sessionStorage.CATEGORIA === "Aluno") === "aluno"
                ? doc.data().srcProfessor
                : doc.data().srcAluno,
            ultimaMensagem: doc.data().ultimaMensagem,
            lida: doc.data().lida,
            timestamp: doc.data().timestamp,
            bloqueado: doc.data().bloqueado,
          },
        }))
      );
    });

    setCarregouConversas(true);
    return () => unsubscribe();
  }, []);

  useEffect(() => {

    if (idChatAtivo !== null && chatAtivo !== null) {
      setActiveChat(idChatAtivo);
      if (sessionStorage.CATEGORIA === "Aluno") {
        setNomeChat(chatAtivo.nomeProfessor);
        setIdUsuarioConversa(chatAtivo.idProfessor);
      } else {
        setNomeChat(chatAtivo.nomeAluno);
        setIdUsuarioConversa(chatAtivo.idAluno);
      }
      setMessages([]);
      setBloqueado(chatAtivo.bloqueado);

    }
  }, [chatAtivo, idChatAtivo]);
  if (carregouConversas) {
    return (
      <>
        <Box className="chat_page">
          <Box className="chat_container">
            <Box className="chat_left">
              <ProfileChat />

              <Box className="chat_list_container">
                <ChatList
                  onChatClick={(chat) => {
                    if (sessionStorage.CATEGORIA === "Aluno") {
                      setIdUsuarioConversa(chat.data.idProfessor);
                    } else {
                      setIdUsuarioConversa(chat.data.idAluno);
                    }
                    setActiveChat(chat.id);
                    setNomeChat(chat.data.nome);
                    setMessages([]);
                    setBloqueado(chat.data.bloqueado);
                  }}
                />
              </Box>
            </Box>
            <Box className="message_container">
              {activeChat ? (
                <>
                  <ChatContainer
                    id={activeChat}
                    nome={nomeChat}
                    isBloqueado={bloqueado}
                    valueInput={inputValue}
                    idUsuarioConversa={idUsuarioConversa}
                    onChange={(e) => setInputValue(e)}
                    onClick={() => setInputValue("")}
                  />
                </>
              ) : (
                <Box className="empty_chat">
                  <p>Olá! Seja bem vindo ao chat</p>
                  <p>Clique em algum chat para começar a conversar</p>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </>
    );
  } else {
    return <CircularProgress color="success" />;
  }
};

export default Chat;
