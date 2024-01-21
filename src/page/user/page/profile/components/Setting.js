import { Icon } from "assets/icon";
import { COLOR } from "page/user/shareComponent/constant";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import ModalUpdatePassword from "./modal/ModalUpdatePassword";

const Setting = () => {
  const [isUpdatePassword, setIsUpdatePassword] = useState(false);

  const { userInfo } = useSelector((state) => state.home);

  const onUpdatePassword = () => {
    setIsUpdatePassword((prev) => !prev);
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-[10px]">
        <div className="flex items-center">
          <p
            className="flex items-center py-[7px] px-[10px] rounded-[10px]"
            style={{ background: `gray` }}
          >
            <Icon name="mail" color="#fff" font="small" />
            <span className="ml-[10px] text-[#fff] text-[12px] md:text-[13px] xl:text-[14px] ">
              {userInfo?.email}
            </span>
          </p>
        </div>
        <div className="flex items-center">
          <button
            className="flex items-center py-[7px] px-[10px] rounded-[10px]"
            style={{ background: `${COLOR.primaryColor}` }}
            onClick={onUpdatePassword}
          >
            <Icon name="lock" color="#fff" font="small" />
            <span className="ml-[10px] text-[#fff] text-[12px] md:text-[13px] xl:text-[14px]">
              Thay đổi mật khẩu
            </span>
          </button>
        </div>
      </div>
      <ModalUpdatePassword
        open={isUpdatePassword}
        onOpen={onUpdatePassword}
        title="Đổi mật khấu"
        data={userInfo}
      />
    </>
  );
};

export default Setting;
