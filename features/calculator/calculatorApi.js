export function otpLogin(loginNumber) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch("https://ranaadmin.anujdwivedi.in/ownerapi/v1/otp-login", {
        method: "POST",
        body: loginNumber,
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        
        resolve({ data });
      } else {
        const error = await response.text();
        reject(error);
      }
    } catch (error) {
      reject(error);
    }
  });
}

export function verifyOtp(verifyCredentials) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch("https://ranaadmin.anujdwivedi.in/ownerapi/v1/verify-otp", {
        method: "POST",
        body: verifyCredentials,
       });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        
        resolve({ data });
      } else {
        const error = await response.text();
        reject(error);
      }
    } catch (error) {
      reject(error);
    }
  });
}

export function getAgents(verifyCredentials) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch("https://ranaadmin.anujdwivedi.in/ownerapi/v1/getAgents", {
        method: "GET",
        body: verifyCredentials,
        // headers: { "content-type": "application/json" },
        headers: {
          // 'Content-Type': 'application/json',
          'Authorization': `bearer token 642|oHmou0dP0KuklXibmDlkR3J271KVgVHNw7tSzy0Scc86b51a`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        
        resolve({ data });
      } else {
        const error = await response.text();
        reject(error);
      }
    } catch (error) {
      reject(error);
    }
  });
}

export function calculateResult(info) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://192.168.155.73:3000/api/findCO2Emission", {
      method: "POST",
      body: JSON.stringify(info),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    console.log(data);
    //TODO: on sever it will only return some info of user (not password)
    resolve({ data });
  });
}