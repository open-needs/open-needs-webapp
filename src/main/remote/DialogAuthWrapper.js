import { authOpenAtom, showErrorMessageAtom } from '../../shared/atoms';
import { useRecoilState, useSetRecoilState } from 'recoil';

import DialogAuth from '../AuthUi/Dialog';
import React from 'react';

export default function DialogAuthWrapper({ handleSignIn, ...props }) {
  const [authOpen, setAuthOpen] = useRecoilState(authOpenAtom);
  const setShowErrorMessage = useSetRecoilState(showErrorMessageAtom);

  const handleClose = (event, reason) => {
    if (reason && reason == 'backdropClick') return;
    setAuthOpen(false);
    setShowErrorMessage(false);
  };
  // const handleSignUp = async ({ email, name, password }) => {
  //   console.log({ email, name, password });
  // };
  const handleForget = ({ email }) => {
    console.log({ email });
  };
  const handleSocial = {
    // Google: () => {},
    // Github: () => {}
  };

  return authOpen ? (
    <DialogAuth
      open={true}
      hideTabs={false}
      textFieldVariant="outlined"
      onClose={handleClose}
      // handleSignUp={handleSignUp}
      handleForget={handleForget}
      handleSignIn={handleSignIn}
      handleSocial={handleSocial}
      {...props}
    />
  ) : null;
}
