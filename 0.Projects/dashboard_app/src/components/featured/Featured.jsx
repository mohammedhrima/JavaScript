import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "./Featured.scss"
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import KeyboeardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboeardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function Featured() {
    const percentage = 66;
    return (
        <div className="featured">
            <div className="top">
                <h1 className="title">
                    Total Revenue
                </h1>
                <MoreVertOutlinedIcon />
            </div>
            <div className="bottom">
                <div className="featuredChart">
                    <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                        strokeWidth={5} />
                </div>
                <p className="title">
                    Total sales made today
                </p>
                <p className="amount">
                    $100
                </p>
                <p className="desc">
                    Previous transactions processing. Last payment may not be included.
                </p>
                <div className="summary">
                    <div className="item">
                        <div className="itemTitle">Target</div>
                        <div className="itemResult positive">
                            <KeyboeardArrowUpIcon fontSize='small' />
                            <div className="resultAmount">
                                $14.3k
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Last Week</div>
                        <div className="itemResult negative">
                            <KeyboeardArrowDownIcon fontSize='small' />
                            <div className="resultAmount">
                                $2.4k
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Last Month</div>
                        <div className="itemResult positive">
                            <KeyboeardArrowUpIcon fontSize='small' />
                            <div className="resultAmount">
                                $12.4k
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured