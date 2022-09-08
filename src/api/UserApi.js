import axios from "axios";

const baseUrl = "http://localhost:8084/train-gadai/user";

export const doInsertUser = async (body) => {
  try {
    const response = await axios.post(`${baseUrl}/add`, body);
    return response;
  } catch (error) { return error.response; }
};

export const getAllUser = async () => {
  try {
    const response = await axios.get(`${baseUrl}/all`);
    return response;
  } catch (error) { return error.response; }
};

export const doSearchUser = async (body) => {
  try {
    const response = await axios.post(`${baseUrl}/search`, body);
    return response;
  } catch (error) { return error.response; }
};

export const doGetDetailUser = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}/getDetail`, {
      params: { id },
    });
    return response;
  } catch (error) { return error.response; }
};

export const doUpdate = async (body) => {
  try {
    const response = await axios.put(`${baseUrl}/update`, body);
    return response;
  } catch (error) {
    return error.response;
  }
};

export const doDelete = async (id, actorId) => {
  try {
    const response = await axios.delete(`${baseUrl}/delete`, {
      params: { id, actorId },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};
