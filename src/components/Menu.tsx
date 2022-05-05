import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from "@ionic/react";

import { useLocation } from "react-router-dom";
import {
  archiveOutline,
  archiveSharp,
  bookmarkOutline,
  heartOutline,
  heartSharp,
  mailOutline,
  mailSharp,
  paperPlaneOutline,
  paperPlaneSharp,
  trashOutline,
  trashSharp,
  warningOutline,
  warningSharp,
} from "ionicons/icons";
import "./Menu.css";

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  // {
  //   title: "Inbox",
  //   url: "/page/Inbox",
  //   iosIcon: mailOutline,
  //   mdIcon: mailSharp,
  // },
  {
    title: "Pay",
    url: "/page/Pay",
    iosIcon: paperPlaneOutline,
    mdIcon: paperPlaneSharp,
  },

  {
    title: "Receive",
    url: "/page/Receive",
    iosIcon: archiveOutline,
    mdIcon: archiveSharp,
  },

  // {
  //   title: "Favorites",
  //   url: "/page/Favorites",
  //   iosIcon: heartOutline,
  //   mdIcon: heartSharp,
  // },
];

const labels = ["Family", "Friends", "Notes", "Work", "Travel", "Reminders"];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
              style={{
                backgroundColor: "red",
                width: "80px",
                height: "80px",
                borderRadius: "100%",
                objectFit: "cover",
                // background:
                //   "url('https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1206&q=80')",
              }}
            />
            <h3 style={{ fontWeight: "500", marginBottom: "0px" }}>
              Hari Vishnu Parashar
            </h3>
            <h4
              style={{
                marginBottom: "30px",
                fontSize: "18px",
                fontWeight: "400",
                marginTop: "5px",
              }}
            >
              Rs 500
            </h4>
            {/* <IonListHeader>Hari Vishny </IonListHeader> */}
            {/* <IonNote>hi@ionicframework.com</IonNote> */}
          </div>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={
                    location.pathname === appPage.url ? "selected" : ""
                  }
                  routerLink={appPage.url}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                  // style={{fa}}
                >
                  <IonIcon
                    slot="start"
                    ios={appPage.iosIcon}
                    md={appPage.mdIcon}
                  />
                  <IonLabel className="ion-button">
                    <div style={{ fontWeight: "400" }}>{appPage.title}</div>
                  </IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
        {/*
        <IonList id="labels-list">
          <IonListHeader>Labels</IonListHeader>
          {labels.map((label, index) => (
            <IonItem lines="none" key={index}>
              <IonIcon slot="start" icon={bookmarkOutline} />
              <IonLabel>{label}</IonLabel>
            </IonItem>
          ))}
        </IonList> */}
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
