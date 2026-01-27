import { useSelector } from "react-redux";

function Footer() {
  const { portfolioData } = useSelector((state) => state.root);
  
  const firstName = portfolioData?.intro?.firstName || "";
  const lastName = portfolioData?.intro?.lastName || "";

  return (
    <footer className="pt-6 pb-3 sm:pb-6 footer_section" role="contentinfo">
      {/* Divider */}
      <hr className="h-[1px] w-full bg-gray-700 border-none" />

      {/* Footer Text */}
      <div className="flex flex-col items-center justify-center mt-6 opacity-70 text-center">
        <p className="text-white mb-1">
          © {new Date().getFullYear()} Designed and Developed By
        </p>
        {firstName || lastName ? (
          <p className="text-white mb-0">
            <span className="font-semibold">
              {firstName} {lastName}
            </span>
          </p>
        ) : null}
      </div>
    </footer>
  );
}

export default Footer;
