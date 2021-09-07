import { css } from "@emotion/react";
import HashLoader from "react-spinners/HashLoader";

const override = css`
    display: block;
    margin: 0 auto;
`;

const Loading = () => {
    return (
        <div className="loader">
            <div className="sweet-loading">
                <HashLoader
                    color={"#19262b"}
                    loading={true}
                    size={100}
                    css={css}
                />
            </div>
        </div>
    );
};

export default Loading;
