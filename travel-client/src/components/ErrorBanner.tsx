interface ErrorBannerProps {
  message?: string;
}

const ErrorBanner = ({ message = "에러입니다." }: ErrorBannerProps) => {
  return (
    <div data-testid="error-banner" className="error-banner">
      {message}
    </div>
  );
};

export default ErrorBanner;
