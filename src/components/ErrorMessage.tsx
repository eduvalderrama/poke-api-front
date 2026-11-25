type ErrorMessageProps = {
  error: string;
};

const ErrorMessage = ({ error }: ErrorMessageProps) => {
  return (
    <div className="alert-soft" role="alert">
      No se pudo cargar la información. {error}
    </div>
  );
};

export default ErrorMessage;
