import * as admin from "firebase-admin";

export type NotificationType = "injection_reminder" | "overdue" | "dose_suggestion";

export type NotificationPayload = {
  token: string;
  type: NotificationType;
  title: string;
  body: string;
};

export async function sendNotification(payload: NotificationPayload): Promise<string> {
  const message: admin.messaging.Message = {
    token: payload.token,
    data: {
      type: payload.type,
      title: payload.title,
      body: payload.body
    },
    // Ensure mobile clients receive it promptly.
    android: {
      priority: "high",
      collapseKey: payload.type
    },
    webpush: {
      headers: {
        "Urgency": "high"
      },
      fcmOptions: {}
    }
  };

  return await admin.messaging().send(message);
}

