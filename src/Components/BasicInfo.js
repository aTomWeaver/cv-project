import React from "react";
import "../styles/BasicInfo.css";

class BasicInfo extends React.Component {
  constructor(props) {
    super(props);
    this.info = props.info;
    this.toggleModal = props.toggleModal;
  }
  render() {
    const { name, phone, email, address } = this.props.info;
    let imgUrl =
      "https://lh3.googleusercontent.com/proxy/JhKkvbyZZPn_VMcEVu_1yDFRkrSPj5nBnRGxR6l6byznxeWV0I3G16HvYL2ujZ3rxW7H6bUw13ht0xo8_5uIm7rLgEoDZ1ejlTfsWYcCmNBdkpxQQRRPgZ71I_hSmxLVRnLdF7PiIe2hyTSCoVTfLXbE7cnStAVotWnNzGn8K8nj5Q=w1200-h630-p-k-no-nu";
    if (this.props.info.imgUrl) imgUrl = this.props.info.imgUrl;
    return (
      <div className="section head">
        <button
          className="edit-btn"
          onClick={() => {
            this.toggleModal("basic-info");
            document.getElementById("name").focus();
          }}
        >
          edit
        </button>
        <div className="basic-info">
          <h1>{name}</h1>
          <p>{phone}</p>
          <p>{email}</p>
          <p>{address}</p>
        </div>
        <img src={imgUrl} id="pfp" alt="profile pic" />
      </div>
    );
  }
}

export default BasicInfo;
