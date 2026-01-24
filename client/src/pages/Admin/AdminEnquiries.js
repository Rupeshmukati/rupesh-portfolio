import { useSelector, useDispatch } from "react-redux";
import { Table, Button, message, Popconfirm } from "antd";
import axios from "axios";
import { ShowLoading, HideLoading } from "../../redux/rootSlice";

function AdminEnquiries() {
  const { portfolioData } = useSelector((state) => state.root);
  const { enquiry } = portfolioData; // Redux se data liya
  const dispatch = useDispatch();

  const onDelete = async (id) => {
    try {
      dispatch(ShowLoading());
      const response = await axios.post("/api/portfolio/delete-enquiry", {
        _id: id,
      });
      if (response.data.success) {
        message.success(response.data.message);
        window.location.reload(); // Re-fetch logic (Reload is simplest here)
      }
    } catch (error) {
      message.error("Delete failed");
    } finally {
      dispatch(HideLoading());
    }
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Project Details",
      dataIndex: "projectDetails",
      key: "projectDetails",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Popconfirm
          title="Delete this enquiry?"
          onConfirm={() => onDelete(record._id)}
        >
          <Button danger size="small">
            Delete
          </Button>
        </Popconfirm>
      ),
    },
  ];

  return (
    <div className="p-5">
      <h2 className="text-xl font-semibold mb-4 text-primary">
        Project Enquiries
      </h2>
      <Table
        columns={columns}
        dataSource={enquiry}
        rowKey="_id"
        pagination={false}
      />
    </div>
  );
}

export default AdminEnquiries;
