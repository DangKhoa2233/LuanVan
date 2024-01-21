export const columns = (onClickFuncc) => {
  return [
    {
      title: "Tổng hợp",
      dataIndex: "maDonHang",
      key: "maDonHang",
      width: "25%",
    },
    {
      title: "Ngày tạo đơn",
      dataIndex: "ngayTaoDon",
      key: "ngayTaoDon",
      width: "25%",
    },

    {
      title: "Tình trạng",
      dataIndex: "tinhTrang",
      key: "tinhTrang",
      width: "25%",
    },

    // {
    //   title: "Tong hop",
    //   dataIndex: "soLuong",
    //   key: "soLuong",
    //   width: "10%",
    //    // cell: (cell) => {
    //   return (
    //     <span className="flex inline-block items-center">
    //       {cell?.maDonHang} -{" "}
    //       {cell?.tinhTrang === 2 ? (
    //         <div className="flex items-center">
    //           <span className="w-[4px] h-[4px] rounded-[50%] bg-[green] block mr-[5px]"></span>
    //           <span className="text-[12px] text-[green]">{"Đã giao"}</span>
    //         </div>
    //       ) : cell.tinhTrang === 1 ? (
    //         <div className="flex items-center">
    //           <span className="w-[4px] h-[4px] rounded-[50%] bg-[#00e1ff] block mr-[5px]"></span>
    //           <span className="text-[13px] text-[#2cb5c7]">
    //             {"Đang giao"}
    //           </span>
    //         </div>
    //       ) : cell.tinhTrang === 3 ? (
    //         <div className="flex items-center">
    //           <span className="w-[4px] h-[4px] rounded-[50%] bg-[#00a2ff] block mr-[5px]"></span>
    //           <span className="text-[13px] text-[#00a2ff]">
    //             {"Đang trả hàng"}
    //           </span>
    //         </div>
    //       ) : cell.tinhTrang === 4 ? (
    //         <div className="flex items-center">
    //           <span className="w-[4px] h-[4px] rounded-[50%] bg-[#9d35c3] block mr-[5px]"></span>
    //           <span className="text-[13px] text-[#9d35c3]">
    //             {"Đã trả hàng"}
    //           </span>
    //         </div>
    //       ) : cell.tinhTrang === 5 ? (
    //         <div className="flex items-center">
    //           <span className="w-[4px] h-[4px] rounded-[50%] bg-[#FF0000] block mr-[5px]"></span>
    //           <span className="text-[13px] text-[#FF0000]">{"Đã hủy"}</span>
    //         </div>
    //       ) : (
    //         <div className="flex items-center">
    //           <span className="w-[4px] h-[4px] rounded-[50%] bg-[orange] block mr-[5px]"></span>
    //           <span className="text-[13px] text-[orange]">
    //             {"Chờ xác nhận"}
    //           </span>
    //         </div>
    //       )}
    //     </span>
    //   );
    // },
    // },
  ];
};

// getDataTable
export const getDataTable = (data) => {
  const dataResult = [];
  data?.length > 0 &&
    data.map((item, index) => {
      const obj = { ...item, key: index };
      return dataResult.push(obj);
    });
  return dataResult;
};

export const setGridColumn = (size) => {
  if (size === "3") {
    return "col-span-3";
  } else if (size === "2") {
    return "col-span-2";
  } else {
    return "col-span-1";
  }
};
