import './dots.css'
function Dots(probs) {
    return (<>
        <div className="progress-dots mb-2">
            <span className={probs.index==1?"dot active":"dot"}></span>
            <span className={probs.index==2?"dot active":"dot"}></span>
            <span className={probs.index==3?"dot active":"dot"}></span>
            <span className={probs.index==4?"dot active":"dot"}></span>
            <span className={probs.index==5?"dot active":"dot"}></span>
            <span className={probs.index==6?"dot active":"dot"}></span>
            <span className={probs.index==7?"dot active":"dot"}></span>
            <span className={probs.index==8?"dot active":"dot"}></span>
            <span className={probs.index==9?"dot active":"dot"}></span>
        </div></>);
}

export default Dots;