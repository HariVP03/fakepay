import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useParams } from "react-router";
import {
  qrCodeOutline,
  arrowUpCircle,
  newspaperOutline,
  settingsOutline,
  arrowBackCircleOutline,
  arrowUpOutline,
} from "ionicons/icons";
import "./Home.css";
// import "./Page.css";

const Home: React.FC = () => {
  const { name } = useParams<{ name: string }>();

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{"name"}</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* <ExploreContainer name={name} /> */}
        <div style={{ backgroundColor: "#ebf4ff" }}>
          <div
            style={{
              width: "100%",
              height: "30vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "80%",
                height: "80%",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  //   alignItems: "space-between",
                  //   backgroundColor: "tan",
                }}
              >
                <h6
                  style={{ fontWeight: "400", margin: "0", fontSize: "17px" }}
                >
                  Hari Vishnu Parashar
                </h6>
                <h6
                  style={{
                    margin: "0px",
                    fontWeight: "400",
                    color: "gray",
                    fontSize: "14px",
                  }}
                >
                  harivp@fakepay
                </h6>
                <h6 style={{ color: "blue", fontWeight: "400" }}>
                  My Account ➜
                </h6>
              </div>
              <img
                src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
                style={{
                  //   backgroundColor: "red",
                  width: "60px",
                  height: "60px",
                  borderRadius: "100%",
                  objectFit: "cover",
                  marginLeft: "40px",
                  border: "2px solid green",
                  // background:
                  //   "url('https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1206&q=80')",
                }}
                alt="avatar"
              />
            </div>
          </div>
          <div
            style={{
              width: "100%",
              height: "70vh",
              backgroundColor: "white",
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px",
              display: "flex",
              justifyContent: "space-around",
              paddingLeft: "20px",
              paddingRight: "20px",
              paddingTop: "40px",
            }}
          >
            <HomeButtons icon={qrCodeOutline} />
            <HomeButtons icon={arrowUpOutline} />
            <HomeButtons icon={newspaperOutline} />
            <HomeButtons icon={settingsOutline} />
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

const HomeButtons: React.FC<{ icon: any }> = ({ icon }) => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#4184f3",
          borderRadius: "100%",
          width: "45px",
          height: "45px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <IonIcon
          style={{
            width: "25px",
            height: "25px",
            color: "white",
            padding: "0px",
            fontSize: "10px",
          }}
          // icon={qrCodeOutline}
          icon={icon}
        />
      </div>
    </>
  );
};

export default Home;
