import React, { useEffect } from "react";
import {db, storage} from "../../../utils/firebase";
import ChatItem from "../ChatItem";
import {
  query,
  collection,
  where,
  onSnapshot,
  or,
  orderBy,
} from "firebase/firestore";

export default function ChatList(props) {
  const [chats, setChats] = React.useState([]);
  const [carregouConversas, setCarregouConversas] = React.useState(false);

  useEffect(() => {
    const q = query(
      collection(db, "chats"),
      or(
        where("idProfessor", "==", Number(sessionStorage.ID)),
        where("idAluno", "==", Number(sessionStorage.ID))
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
              sessionStorage.CATEGORIA === "Aluno"
                ? doc.data().nomeProfessor
                : doc.data().nomeAluno,
            ultimaMensagem: doc.data().ultimaMensagem,
            lida: doc.data().lida,
            timestamp: doc.data().timestamp,
            bloqueado: doc.data().bloqueado,
            
          },
        }))
      );
    });
 
  }, []);
  return (
    <>
      
      {chats.map((chat) => (
        <ChatItem
          id={chat.id}
          key={chat.id}
          nome={chat.data.nome}
          ultimaMensagem={chat.data.ultimaMensagem}
          timestamp={chat.data.timestamp}
          lida={chat.data.lida}
          foto={chat.data.foto}
          onClick={() => {
            props.onChatClick(chat);
          }}
          idContato={sessionStorage.CATEGORIA == "Aluno" ? chat.data.idProfessor : chat.data.idAluno}
        />
      ))}
      
    </>
  );
}
