import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {useState} from "react";
import {API} from "./requestsAPI";

export const Request = () => {
  const [checked, setChecked] = useState<boolean>(false);
  const [data, setData] = useState<string>("");

  const sendRequest = () => {
    API.auth(checked)
      .then(response => {
        console.log(response);
        setData(response.data.errorText)
      })
      .catch(error => {
        console.log({...error});
        console.log(error.response ? error.response.data.errorText : error.message);
        setData(error.response ? error.response.data.errorText : error.message);
      });
  };

  return (
    <div>
      <SuperCheckbox
        checked={checked}
        onChangeChecked={setChecked}
      >
        Success
      </SuperCheckbox>
      <SuperButton onClick={sendRequest}>
        Send request
      </SuperButton>
      <div>
        Response data: {data}
      </div>
    </div>
  );
};