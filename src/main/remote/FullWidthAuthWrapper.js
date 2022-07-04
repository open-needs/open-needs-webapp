import FullWidthAuth from '../AuthUi/FullWidth';
import { Typography } from '@mui/material';
import { remoteBaseUrlAtom } from '../../shared/atoms';
import { submitAuthentication } from './authenticate';
import { useNavigate } from 'react-router';
import { useRecoilValue } from 'recoil';
import { useSignIn } from 'react-auth-kit';
import { useSnackbar } from 'notistack';

export default function FullWidthAuthWrapper() {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const signIn = useSignIn();
  const remoteBaseUrl = useRecoilValue(remoteBaseUrlAtom);
  const handleForget = ({ email }) => {
    console.log({ email });
  };

  return (
    <FullWidthAuth
      open={true}
      hideTabs={false}
      textFieldVariant="outlined"
      welcomeComponent={
        <>
          <Typography variant="h4" color="textSecondary">
            <b>Open Needs Server URL</b>
          </Typography>
          <Typography sx={{ mt: 2 }} variant="h6" color="textSecondary">
            {remoteBaseUrl}
          </Typography>
        </>
      }
      handleForget={handleForget}
      handleSignIn={({ email, password }) =>
        submitAuthentication(remoteBaseUrl, signIn, enqueueSnackbar, email, password, navigate)
      }
      handleSocial={{}}
    />
  );
}
