import axios from "axios";

interface FeedbackData {
  email: string;
  comment: string;
}

const API_BASE_URL = "https://business-card-backend-uwr3.onrender.com";
// const API_BASE_URL = "http://localhost:3001";


export const sendFeedback = async (data: FeedbackData): Promise<void> => {
  await axios.post(`${API_BASE_URL}/api/feedback`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

