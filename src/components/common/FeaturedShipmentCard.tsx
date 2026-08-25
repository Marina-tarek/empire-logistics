import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card"
interface FeaturedShipmentCardProps {
  title: string;
  description: string;
}
function FeaturedShipmentCard({title,description,}: FeaturedShipmentCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  )
}

export default FeaturedShipmentCard