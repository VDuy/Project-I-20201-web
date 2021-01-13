
import APIAuth from "./api"

export const login = async (username, password) => {
  try {
    const res = await APIAuth.post('/auth/login', {
      username: username,
      password: password
    });

    return {
      status: true,
      token: res.data.token
    };
  } catch (error) {
    return {
      status: false,

      message: 'Failure to Log In'
    }
  }

}

export const getAllAccount = async () => {
  try {
    const res = await APIAuth.get(`/account`);
    return {
      data: res.data,
      status: true
    };
  } catch (err) {
    return {
      message: "Cannot get data",
      status: false
    };
  }
}
export const getAccountByUsername = async(username) => {
  try {
    const res = await APIAuth.get(`/account/${username}`);
    return {
      data: res.data,
      status: true
    }
  } catch (err) {
    return {
      message: 'Cannot get data',
      status: false
    }
  }
}

export const getAllReports = async () => {
  try {
    const res = await APIAuth.get(`/reports`);
    return {
      data: res.data,
      status: true
    };
  } catch (err) {
    return {
      message: "Cannot get data",
      status: false
    };
  }
}
export const getReportsById = async(id) => {
  try {
    const res = await APIAuth.get(`/reports/${id}`);
    return {
      data: res.data,
      status: true
    }
  } catch (err) {
    return {
      message: 'Cannot get data',
      status: false
    }
  }
}
export const createAccount = async (newAccount) => {
  try {
    const res = await APIAuth.post(`/account`, newAccount);
    return {
      status: true
    }
  } catch (err) {
    return {
      message: "Cannot create data",
      status: false
    };
  }
}
export const createReports = async (newReports) => {
  try {
    const res = await APIAuth.post(`/reports`, newReports);
    return {
      status: true
    }
  } catch (err) {
    return {
      message: "Cannot create data",
      status: false
    };
  }
}

export const DeleteAccount = async (username) => {
  try {
    await APIAuth.delete(`/account/${username}`)
    return {
      status: 1,
    }
  } catch (error) {
    return {
      message: error,
      status: 0,
    }
  }
}
export const DeleteReports = async (id) => {
  try {
    await APIAuth.delete(`/reports${id}`);
    return {

      status: true
    }
  } catch (error) {
    return {
      message: error,
      status: 0,
    }
  }
}