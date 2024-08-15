import React from "react";
import '../index.css';
import { Card, CardContent, CardHeader } from "semantic-ui-react";

const CardExamplecard = ({weatherData}) => {
    <Card>
        <CardContent>
            <CardHeader className="header">
                {weatherData}
        

            </CardHeader>
        </CardContent>
    </Card>
}

export default CardExamplecard;