"use strict";

const onForgotPassword = () => {
  modal("alert-danger", "Forgot Password");
};
const onCreatAccount = () => modal("alert-success", "Create Account");

const onLogin = (event) => {
  event.preventDefault();
  const email = document.getElementById("email-input").value;
  const isEmail = email.includes("@");
  const pass = document.getElementById("pass-input").value;
  const isEmpty = pass.length == 0;

  if (isEmail && !isEmpty) {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.append("email", email);
    urlParams.append("pass", pass);
    window.location.search = urlParams;
    modal("alert-success", `Email:${email}, Password:${pass}`);
  }
};

const onGoogleLogin = () => modal("alert-success", "Google Login");
const onGamanetLogin = () => modal("alert-success", "Gamanet Login");

const modal = (classProperty, message) => {
  const modalNotification = getModal();
  modalNotification.insertAdjacentHTML(
    "afterbegin",
    `
    <div class="row">
        <div class="container p-5 notification">
          <div
            class="text-center alert ${classProperty} alert-dismissible fade show"
            role="alert"
          >
            <strong class="notification-text">${message}</strong>
            <button
              type="button"
              class="close"
              onclick="onCloseModal()"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>
      </div>    
    `
  );
};

const getModal = () => document.getElementById("notification-modal");
const onCloseModal = () => (getModal().innerHTML = "");
