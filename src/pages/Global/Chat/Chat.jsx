import React, { useEffect, useState } from "react";
import db from "../../../utils/firebase";
import "./style.css";
import {
  Box,
  CircularProgress,
} from "@mui/material";
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

const Chat = () => {
  const [activeChat, setActiveChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [nomeChat, setNomeChat] = useState("");
  const [srcChat, setSrcChat] = useState("");
  const [chats, setChats] = useState([]);
  const [bloqueado, setBloqueado] = useState(false)
  const [carregouConversas, setCarregouConversas] = useState(false);
  const [idUsuarioConversa, setIdUsuarioConversa] = useState(0)

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
              sessionStorage.tipo === "aluno"
                ? doc.data().nomeProfessor
                : doc.data().nomeAluno,
            src:
              sessionStorage.tipo === "aluno"
                ? doc.data().srcProfessor
                : doc.data().srcAluno,
            ultimaMensagem: doc.data().ultimaMensagem,
            lida: doc.data().lida,
            timestamp: doc.data().timestamp,
            bloqueado: doc.data().bloqueado
          },
        }))
        
      );
    
   
    });

    setCarregouConversas(true);
    return () => unsubscribe();
  }, []);

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
                    
                    if(sessionStorage.tipo === "aluno"){
                      setIdUsuarioConversa(chat.data.idProfessor)
                    }else{
                      setIdUsuarioConversa(chat.data.idAluno)
                    }

                    setActiveChat(chat.id);
                    setNomeChat(chat.data.nome);
                    setSrcChat(chat.data.src);
                    setMessages([]);
                    setBloqueado(chat.data.bloqueado)
                  }}
                />
              </Box>
            </Box>
            <Box className="message_container">
              {activeChat ? (
                <>
                  <ChatContainer
                    id={activeChat}
                    src={srcChat}
                    nome={nomeChat}
                    isBloqueado={bloqueado}
                    valueInput={inputValue}
                    idUsuarioConversa = {idUsuarioConversa}
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
    return <CircularProgress color="success"/>;
  }
};

export default Chat;
