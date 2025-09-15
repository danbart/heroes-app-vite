import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import type { Hero } from '../interfaces/hero.interface'
import { getCategoryColor, getStatusColor } from '../utils/constants'

interface HeroInfoProps {
    superheroData: Hero
}

export const HeroInfo = ({ superheroData }: HeroInfoProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
                <CardHeader>
                    <CardTitle>Detalles Personales</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b">
                        <span className="text-gray-600">Nombre Real:</span>
                        <span className="font-semibold">{superheroData?.name}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                        <span className="text-gray-600">Alias:</span>
                        <span className="font-semibold">{superheroData?.alias}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                        <span className="text-gray-600">Categoría:</span>
                        <Badge className={`${getCategoryColor(superheroData?.category || '')} text-white`}>
                            {superheroData?.category}
                        </Badge>
                    </div>
                    <div className="flex justify-between items-center py-2">
                        <span className="text-gray-600">Estado:</span>
                        <Badge className={`${getStatusColor(superheroData?.status || '')} text-white`}>
                            {superheroData?.status}
                        </Badge>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Información del Universo</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b">
                        <span className="text-gray-600">Universo:</span>
                        <span className="font-semibold">{superheroData?.universe}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                        <span className="text-gray-600">Primera Aparición:</span>
                        <span className="font-semibold">{superheroData?.firstAppearance}</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                        <span className="text-gray-600">Años Activo:</span>
                        <span className="font-semibold">
                            {new Date().getFullYear() - Number.parseInt(superheroData?.firstAppearance || '0')} años
                        </span>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
