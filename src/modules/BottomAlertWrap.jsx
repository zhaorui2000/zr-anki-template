import Alert from "../components/Alert";
export default function BottomAlertWrap(props) {
  const { children } = props;
  return (
    <div className="flex flex-col gap-2 h-screen justify-between ">
      <div className="overflow-y-auto flex-grow-1 flex-shrink-1">
        {children}
      </div>
      <div className="flex flex-grow-0 flex-shrink-1 w-full gap-x-4 p-2 items-center bg-base-200 text-base-content">
        <Alert type="error">答错</Alert>
        <Alert type="warning">部分</Alert>
        <Alert type="info">犹豫</Alert>
        <Alert type="success">快速</Alert>
      </div>
    </div>
  );
}
