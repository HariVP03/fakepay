import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
} from "@ionic/react";
import { useParams } from "react-router";

const Send = () => {
  const { upiId } = useParams<{ upiId: string }>();
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{"name"}</IonTitle>
          </IonToolbar>
        </IonHeader>
        dqw {upiId}
      </IonContent>
    </IonPage>
  );
};

export default Send;
