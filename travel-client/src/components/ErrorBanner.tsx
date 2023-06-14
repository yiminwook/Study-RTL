interface ErrorBannerProps {
  message?: string;
}

const ErrorBanner = ({ message = "에러입니다." }: ErrorBannerProps) => {
  return (
    <div
      data-testid="error-banner"
      style={{ backgroundColor: "red", color: "white" }}
    >
      {message}
    </div>
  );
};

export default ErrorBanner;
