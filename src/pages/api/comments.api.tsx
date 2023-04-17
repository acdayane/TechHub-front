import axios from "axios";

export async function postComment(content: string, courseId: number, token: string) {
  const body = {
    content,
  };
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const result = await axios.post(
    `${process.env.API_URL}/comments/${courseId}`,
    body,
    config
  );
  return result.data;
}

export async function deleteComment(commentId: number) {
  const result = await axios.delete(
    `${process.env.API_URL}/comments/${commentId}`
  );
  return result.data;
}
