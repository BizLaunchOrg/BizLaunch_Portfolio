import { ExpandMore } from "@mui/icons-material";
import { FAQData } from "../../constants/Contants";

const FAQSection = () => {
    return (
        <div>
            {FAQData.map((faq, index) => (
                <div key={index}>
                    <h3>{faq.question}</h3>
                    <p>{faq.answer}</p>
                </div>
            ))}
        </div>
    );
};

export default FAQSection;