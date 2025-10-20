import axios from "axios";
import { jwtDecode } from "jwt-decode";

type TokenPayload = {
  sub: string;
  video: {
    room: string;
    roomJoin: boolean;
  };
  metadata: string;
};

export type ConnectionDetails = {
  serverUrl: string;
  roomName: string;
  participantName: string;
  participantToken: string;
};

const axiosInstance = axios.create({
  baseURL: "https://business-card-backend-uwr3.onrender.com",
  // baseURL: "http://localhost:3001",
});

export const getConnectionDetails = async (language: string) => {
  const response = await axiosInstance.get(
    `/get-livekit-token?language=${language}`
  );
  const decoded: TokenPayload = jwtDecode(response.data.token);
  const token = response.data.token;
  const serverUrl = JSON.parse(decoded.metadata).livekitUrl;
  if (decoded) {
    const data: ConnectionDetails = {
      serverUrl,
      roomName: decoded.video.room,
      participantToken: token,
      participantName: decoded.sub,
    };
    return data;
  }
};
