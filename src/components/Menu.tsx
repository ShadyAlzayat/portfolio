import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonTitle,
  IonToolbar,
  IonAvatar,
  IonButton
} from '@ionic/react';
import { logoLinkedin, logoGithub } from 'ionicons/icons';
import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { AppPage } from '../declarations';

interface MenuProps extends RouteComponentProps {
  appPages: AppPage[];
}

const Menu: React.FunctionComponent<MenuProps> = ({ appPages }) => (
  <IonMenu contentId='main'>
    <IonHeader className='ion-text-center'>
      <IonToolbar>
        <IonAvatar className='profile-photo'>
          <img
            className='profile-photo'
            src='/assets/profilePhoto.jpg'
            alt=''
          />
        </IonAvatar>
        <IonTitle>Shady Alzayat</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent>
      <IonList>
        {appPages.map((appPage, index) => {
          return (
            <IonMenuToggle
              className='ion-text-center'
              key={index}
              autoHide={false}
            >
              <IonItem href={appPage.url}>
                <IonIcon slot='start' icon={appPage.icon} />
                <IonLabel>{appPage.title}</IonLabel>
              </IonItem>
            </IonMenuToggle>
          );
        })}
      </IonList>
    </IonContent>

    <IonButton
      onClick={() =>
        window.open('https://www.linkedin.com/in/shadyalzayat/', '_system')
      }
      fill='clear'
      size='small'
    >
      <IonIcon slot='icon-only' icon={logoLinkedin} />
    </IonButton>
    <IonButton
      onClick={() => window.open('https://github.com/shadyalzayat', '_system')}
      fill='clear'
      size='small'
    >
      <IonIcon slot='icon-only' icon={logoGithub} />
    </IonButton>
  </IonMenu>
);

export default withRouter(Menu);
