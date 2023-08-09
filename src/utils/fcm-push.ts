import admin from "firebase-admin";

const messaging = admin.messaging();

/**
 * Send Fcm Message Single
 * @param title
 * @param body
 * @param token
 */
export const pushMessage = async (
  title: string,
  body: string,
  token: string
) => {
  try {
    const message = {
      notification: {
        title,
        body,
      },
      token,
    };

    await messaging.send(message);
  } catch (err) {
    console.log(err);
  }
};
