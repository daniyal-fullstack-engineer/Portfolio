import React from "react";

const FiverrIcon = () => {

  const handleFiver = () => {
    window.open('https://www.fiverr.com/daniyalamjad14', '_blank');
  };
  return (
    <div className="fiverr-icon">
      <button
      onClick={()=>{
        handleFiver()
        
      }}
        type="button"
        id="ada-chat-button"
        className="
    
    
    button-v2
    
    
    button--appear"
        aria-label="Chat with bot"
        title="Chat with bot"
        aria-controls="ada-chat-frame"
        aria-expanded="false"
        style={{
          backgroundColor: "rgb(29, 191, 115)",
          height: 50,
          width: 50,
          color: "rgb(0, 0, 0)",
        }}
      >
        <img
          className="button__icon"
          alt=""
          src="https://static.ada.support/images/018b5639-bcc2-4a61-b0bf-8f3429eb3fa8.svg"
        />
      </button>
    </div>
  );
};

export default FiverrIcon;
