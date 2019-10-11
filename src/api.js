const newlead = (data) => {
    return fetch('https://service.capsulecrm.com/service/newlead', {
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formDataBuilder(data)
    });
};

const formDataBuilder = (data) => {
    let formData = "";
    formData += "FORM_ID=e5a737d6-e109-43c7-a0c0-da30133ce61f";
    formData += "&TAG=" + encodeURIComponent( data.type === "estimate-form" ? "Get estimate" : "Contact us" );
    formData += "&COMPLETE_URL=" + encodeURIComponent(window.location.href);
    //formData += "&DEVELOPER=TRUE";
    formData += "&EMAIL=" + data.email;
    if(!(data.type === "estimate-form")) {
        formData += "&PHONE=" + data.phone;
    }
    formData += "&FIRST_NAME=" + data.name;
    return formData;
};

const contactUs = (data) => {
    return fetch("https://landly.ai/contact_us", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

export default { newlead, contactUs };
