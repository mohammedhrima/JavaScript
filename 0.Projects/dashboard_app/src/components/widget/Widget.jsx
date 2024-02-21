import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import "./Widget.scss"

function Widget({ type }) {
    let data;
    // temporary
    const amount = 100
    const diff = 20

    switch (type) {
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link: "See all users",
                icon: (<PersonOutlinedIcon className="icon" style={{
                    color: "#75131D",
                    backgroundColor: "#F7283C",

                }} />)
            }
            break;
        case "order":
            data = {
                title: "ORDERS",
                isMoney: false,
                link: "View all orders",
                icon: (<ShoppingCartOutlinedIcon className="icon" style={{
                    color: "#75300D",
                    backgroundColor: "#E08019",
                }} />)
            }
            break;
        case "earning":
            data = {
                title: "EARNINGS",
                isMoney: true,
                link: "View net earnings",
                icon: (<MonetizationOnOutlinedIcon className="icon" style={{
                    color: "#BF810D",
                    backgroundColor: "#FFEA19",
                }} />)
            }
            break;
        case "balance":
            data = {
                title: "BALANCE",
                isMoney: true,
                link: "See details",
                icon: (<AccountBalanceOutlinedIcon className="icon" style={{
                    color: "#40084D",
                    backgroundColor: "#7619E0",
                }} />)
            }
            break;
        default:
            break;
    }
    return (
        <div className="widget">
            <div className="left">
                <div className="title">{data.title}</div>
                <div className="counter">
                    {data.isMoney && "$"} {amount}
                </div>
                <div className="link">{data.link}</div>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpOutlinedIcon />
                    {diff}%
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widget

