import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HeroBanner } from "@/heroes/components/HeroBanner"
import { HeroFullStats } from "@/heroes/components/HeroFullStats"
import { HeroInfo } from "@/heroes/components/HeroInfo"
import { HeroPowers } from "@/heroes/components/HeroPowers"
import { useHero } from "@/heroes/hooks/useHero"
import { Award, Gauge, Users, Zap } from "lucide-react"
import { useParams } from "react-router"



export const HeroPage = () => {
    const { idSlug = '' } = useParams();

    const { data: superheroData } = useHero({ idSlug });

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header Banner */}
            {superheroData && <HeroBanner superheroData={superheroData} />}

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-6 py-8">
                <Tabs defaultValue="stats" className="w-full">
                    <TabsList className="grid w-full grid-cols-4 mb-8">
                        <TabsTrigger value="stats" className="flex items-center gap-2">
                            <Gauge className="w-4 h-4" />
                            Estadísticas
                        </TabsTrigger>
                        <TabsTrigger value="powers" className="flex items-center gap-2">
                            <Zap className="w-4 h-4" />
                            Poderes
                        </TabsTrigger>
                        <TabsTrigger value="team" className="flex items-center gap-2">
                            <Users className="w-4 h-4" />
                            Equipo
                        </TabsTrigger>
                        <TabsTrigger value="info" className="flex items-center gap-2">
                            <Award className="w-4 h-4" />
                            Información
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="stats" className="space-y-6">
                        {superheroData && <HeroFullStats superheroData={superheroData} />}
                    </TabsContent>

                    <TabsContent value="powers">
                        {superheroData && <HeroPowers superheroData={superheroData} />}
                    </TabsContent>

                    <TabsContent value="team">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Users className="w-6 h-6 text-green-500" />
                                    Afiliación de Equipo
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-center py-8">
                                    <div className="bg-green-100 p-6 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                                        <Users className="w-12 h-12 text-green-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-green-700 mb-2">{superheroData?.team}</h3>
                                    <p className="text-gray-600">Miembro activo del equipo de superhéroes más poderoso</p>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="info">
                        {superheroData && (<HeroInfo superheroData={superheroData} />)}
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}
