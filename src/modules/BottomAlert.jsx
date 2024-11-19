import Alert from "./../components/Alert";
export default function BottomAlert() {
  return (
    <div className="flex fixed bottom-0 w-full">
      <Alert type="error">答错</Alert>
      <Alert type="warning">部分</Alert>
      <Alert type="info">犹豫</Alert>
      <Alert type="success">快速</Alert>
    </div>
  );
}
