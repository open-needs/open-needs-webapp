import Button from '@mui/material/Button';
import { needsJsonAtom } from '../../shared/atoms';
import { useSetRecoilState } from 'recoil';

export default function UploadLocalNeedsJson() {
  const setNeedsJson = useSetRecoilState(needsJsonAtom);
  const handleUpload = (event) => {
    const reader = new FileReader();
    reader.onload = ((reader) => {
      return function () {
        const content = reader.result;
        const contentObj = JSON.parse(content);
        setNeedsJson(contentObj);
      };
    })(reader);
    reader.readAsText(event.target.files[0]);
  };
  return (
    <Button variant="contained" color="secondary" component="label">
      Upload needs.jon
      <input type="file" accept="application/json" hidden onChange={handleUpload} />
    </Button>
  );
}
