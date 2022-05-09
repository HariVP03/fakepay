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
  chevronDownOutline,
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

        <div style={{ backgroundColor: "#ebf4ff", height: "100vh" }}>
          <div
            style={{
              width: "100%",
              height: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "30vh",
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
            className="animate"
            style={{
              width: "100%",
              height: "70vh",
              backgroundColor: "white",
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px",
              // top: "80%",
              position: "fixed",
            }}
            // id="animate"
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                paddingLeft: "5px",
                paddingRight: "5px",
                paddingTop: "40px",
                // backgroundColor: "#dae6f5",
                // flexirection: "column",
              }}
            >
              <HomeButtons icon={qrCodeOutline} text="Scan" />
              <HomeButtons icon={arrowUpOutline} text="Send" />
              <HomeButtons icon={newspaperOutline} text="Bills" />
              <HomeButtons icon={settingsOutline} text="More" />
            </div>
            <div
              style={{
                paddingLeft: "28px",
                marginTop: "50px",
                // backgroundColor: "yellow",
              }}
            >
              People
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  flexWrap: "wrap",
                  objectPosition: "center",
                  justifyContent: "space-between",
                  // Left: "-10px",
                  paddingRight: "20px",
                }}
              >
                <PeopleAvatar
                  name="Adebayo"
                  url="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />
                <PeopleAvatar
                  name="Terin"
                  url="https://avatars.githubusercontent.com/u/273509?v=4"
                />
                <PeopleAvatar
                  name="Michelle"
                  url="https://indianacademy.edu.in/wp-content/uploads/2020/04/profile-2.jpg"
                />
                <PeopleAvatar
                  name="John"
                  url="https://pbs.twimg.com/profile_images/1349456113046056961/j0BvBsaT_400x400.jpg"
                />
                <HomeButtons
                  icon={chevronDownOutline}
                  styles={{ marginTop: "10px" }}
                  text="More"
                />
                {/* <IonIcon
                  style={{
                    width: "45px",
                    height: "45px",
                    padding: "0px",
                    fontSize: "10px",
                    backgroundColor: "#dae6f5",
                    marginTop: "10px",
                    borderRadius: "100%",
                    color: "#4184f4",
                  }}
                  icon={chevronDownOutline}
                /> */}
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

const HomeButtons: React.FC<{ icon: any; text?: string; styles?: any }> = ({
  icon,
  text,
  styles,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "#4184f3",
        fontSize: "14px",
        ...styles,
      }}
    >
      <div
        style={{
          backgroundColor: "#4184f3",
          borderRadius: "100%",
          width: "45px",
          height: "45px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <IonIcon
          style={{
            width: "20px",
            height: "20px",
            color: "white",
            padding: "0px",
            fontSize: "10px",
          }}
          icon={icon}
        />
      </div>
      {text}
    </div>
  );
};

const PeopleAvatar: React.FC<{ url: string; name: string }> = ({
  url,
  name,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontSize: "12px",
      }}
    >
      <img
        src={url}
        style={{
          width: "45px",
          height: "45px",
          borderRadius: "100%",
          objectFit: "cover",
          marginTop: "10px",
        }}
        alt="avatar"
      />
      {name}
    </div>
  );
};

export default Home;
