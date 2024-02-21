import { classNames } from "@/functions/classNames";
import { useTranslation } from "react-i18next";

export default function SearchingPage({ fullScreen }: { fullScreen?: boolean }) {
    const { t } = useTranslation("global");

    return (
        <div className={classNames("flex justify-center items-center flex-col", fullScreen ? 'min-h-screen' : '')}>
            <div className="relative flex items-center">
                <svg className="text-blue-gray-100 animate-spin w-24 h-24 mb-2" viewBox="0 0 64 64" fill="#ffff" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                    <path
                        d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeMiterlimit="round"
                        style={{ strokeWidth: "2px" }}
                    ></path>
                    <path
                        d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeMiterlimit="round"
                        className="text-red-500"
                        style={{ strokeWidth: "2px" }}
                    ></path>
                </svg>
                <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute m-auto w-15 h-15"
                    x="0px"
                    y="0px"
                    viewBox="0 0 250.1 200"
                    style={{ width: "60px", height: "60px", left: "50%", transform: "translate(-50%)", top: "19px" }}
                >
                    <g transform="matrix(2.25,0,0,2.25,-2.25,-9.0087890625)">
                        <g transform="translate(0,-1020.3622)">
                            <path
                                style={{ fill: "#EB1034" }}
                                d="M45.2,1024.4c-10,0-18,7.9-18.6,17.9c-2,0.5-3.9,1.3-5.6,2.4c-5.1,3-8.7,9.4-8.8,16.2    c0,10.5,8.5,19.1,18.9,19.1h12.6v11.1c0,2.1-1.6,3.7-3.7,3.7h-2.1c-0.8-3.2-3.7-5.6-7.1-5.6c-4.1,0-7.4,3.3-7.4,7.4    c0,4.1,3.3,7.4,7.4,7.4c3.4,0,6.3-2.4,7.1-5.6h2.1c4.1,0,7.4-3.3,7.4-7.4v-33.3h-3.7v18.5H31c-8.4,0-15.2-6.9-15.2-15.4    c0-5.6,2.9-10.5,7.4-13.2c0.2-0.2,0.5-0.3,0.8-0.4c0.5-0.3,1-0.5,1.5-0.7c0.3-0.1,0.5-0.2,0.8-0.3c0.6-0.2,1.3-0.4,1.9-0.5    c0.9-0.2,1.9-0.3,2.9-0.3c4.4,0,8.3,1.9,11.1,4.9c1.7,1.9,4.5-0.7,2.7-2.5c-3.4-3.8-8.4-6.1-13.8-6.1c-0.3,0-0.5,0-0.8,0.1    c0.9-7.7,7.2-13.6,15-13.6c7.3,0,13.5,5.2,14.9,12.5c0.2,1.3,1.7,1.9,2.8,1.2c2.4-1.5,5.1-2.2,7.9-2.2c8.4,0,15.2,6.9,15.2,15.4    c0,1,0.8,1.9,1.9,1.9c5.3,0,9.5,4.3,9.5,9.7c0,5.4-4.3,9.7-9.5,9.7H69.5v-18.5h-3.7v33.3c0,4.1,3.3,7.4,7.4,7.4h2.1    c0.8,3.2,3.7,5.6,7.1,5.6c4.1,0,7.4-3.3,7.4-7.4c0-4.1-3.3-7.4-7.4-7.4c-3.4,0-6.3,2.4-7.1,5.6h-2.1c-2.1,0-3.7-1.6-3.7-3.7v-11.1    h18.3c7.3,0,13.2-6,13.2-13.4c0-6.8-5.1-12.2-11.7-13.1c-0.8-9.8-8.7-17.6-18.6-17.6c-2.7,0-5.2,1.1-7.7,2.2    C60.7,1030.1,53.6,1024.4,45.2,1024.4z M51,1050.3v33.3h3.7v-33.3H51z M58.4,1050.3v33.3h3.7v-33.3H58.4z M51,1087.3v3.7h3.7v-3.7    H51z M58.4,1087.3v3.7h3.7v-3.7H58.4z M30.6,1092.9c2.1,0,3.7,1.6,3.7,3.7s-1.6,3.7-3.7,3.7s-3.7-1.6-3.7-3.7    S28.6,1092.9,30.6,1092.9z M82.5,1092.9c2.1,0,3.7,1.6,3.7,3.7s-1.6,3.7-3.7,3.7c-2.1,0-3.7-1.6-3.7-3.7S80.4,1092.9,82.5,1092.9z    M1,1094.7v3.7h3.7v-3.7H1z M8.4,1094.7v3.7h3.7v-3.7H8.4z M15.8,1094.7v3.7h3.7v-3.7H15.8z M51,1094.7v3.7h3.7v-3.7H51z    M58.4,1094.7v3.7h3.7v-3.7H58.4z M93.6,1094.7v3.7h3.7v-3.7H93.6z M101,1094.7v3.7h3.7v-3.7H101z M108.4,1094.7v3.7h3.7v-3.7    H108.4z M51,1102.1v3.7h3.7v-3.7H51z M58.4,1102.1v3.7h3.7v-3.7H58.4z M51,1109.6v3.7h3.7v-3.7H51z M58.4,1109.6v3.7h3.7v-3.7    H58.4z"
                            ></path>
                        </g>
                    </g>
                </svg>
            </div>
            <span style={{ fontWeight: "600", fontSize: "14px", color: "#9ca3af", textTransform: "capitalize" }}>{t("global.searching")}...</span>
        </div>
    );
}
