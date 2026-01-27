function AdminHeader() {
  return (
    <div className="bg-primary sm:gap-0 sm:px-10 md:py-3 sm:py-2 py-2 px-4 py-1 border-b border-[#374151]">
      <a href="/" className="flex items-center justify-center justify-between p-0 m-0">
        {" "}
        <span className="text-secondary text-2xl sm:text-3xl font-semibold mb-0">
          R
        </span>
        <span className="text-white text-2xl sm:text-3xl font-semibold mb-0">
          K
        </span>
        <span className="text-tertiary text-2xl sm:text-3xl font-semibold mb-0">
          M
        </span>
      </a>
    </div>
  );
}

export default AdminHeader;
