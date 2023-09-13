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
            src:
              sessionStorage.CATEGORIA === "Aluno"
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
  
    //tenho o state de vetores de chats, quero adicionar uma propriedade de foto
    //para cada chat
    chats.forEach((chat) => {
      if (sessionStorage.CATEGORIA === "Aluno") {
        storage
          .ref(`/imgs-perfil-professor/${chat.data.idProfessor}_ft_perfil`)
          .getDownloadURL()
          .then((url) => {
            chat.data.foto = url;
          }).catch((error) => {
            chat.data.foto = "";
          });
      } else {
        storage
          .ref(`/imgs-perfil-aluno/${chat.data.idAluno}_ft_perfil`)
          .getDownloadURL()
          .then((url) => {
            chat.data.foto = url;
          }).catch((error) => {
            chat.data.foto = "";
          });
      }
    });
    setCarregouConversas(true);
    return () => unsubscribe();
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
          src={chat.data.src}
          foto={chat.data.foto}
          onClick={() => {
            props.onChatClick(chat);
          }}
        />
      ))}
      
    </>
  );
}
