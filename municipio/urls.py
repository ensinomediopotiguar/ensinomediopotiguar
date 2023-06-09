from django.urls import path
from . import views

urlpatterns = [
    path('natal', views.natal, name='municipio/natal'),
    path('macaiba', views.macaiba, name='municipio/macaiba'),
    path('ares', views.ares, name='municipio/ares'),
    path('baiaformosa', views.baiaformosa, name='municipio/baiaformosa'),
    path('canguaretama', views.canguaretama, name='municipio/canguaretama'),
    path('extremoz', views.extremoz, name='municipio/extremoz'),
    path('goianinha', views.goianinha, name='municipio/goianinha'),
    path('montealegre', views.montealegre, name='municipio/montealegre'),
    path('nisiafloresta', views.nisiafloresta, name='municipio/nisiafloresta'),
    path('parnamirim', views.parnamirim, name='municipio/parnamirim'),
    path('saogoncalodoamarante', views.saogoncalodoamarante, name='municipio/saogoncalodoamarante'),
    path('saojosedemipibu', views.saojosedemipibu, name='municipio/saojosedemipibu'),
    path('senadorgeorginoavelino', views.senadorgeorginoavelino, name='municipio/senadorgeorginoavelino'),
    path('tibaudosul', views.tibaudosul, name='municipio/tibaudosul'),
    path('veracruz', views.veracruz, name='municipio/veracruz'),
    path('vilaflor', views.vilaflor, name='municipio/vilaflor'),
    path('boasaude', views.boasaude, name='municipio/boasaude'),
    path('brejinho', views.brejinho, name='municipio/brejinho'),
    path('espiritosanto', views.espiritosanto, name='municipio/espiritosanto'),
    path('jundia', views.jundia, name='municipio/jundia'),
    path('lagoadanta', views.lagoadanta, name='municipio/lagoadanta'),
    path('lagoadepedras', views.lagoadepedras, name='municipio/lagoadepedras'),
    path('lagoasalgada', views.lagoasalgada, name='municipio/lagoasalgada'),
    path('montanhas', views.montanhas, name='municipio/montanhas'),
    path('montedasgameleiras', views.montedasgameleiras, name='municipio/montedasgameleiras'),
    path('novacruz', views.novacruz, name='municipio/novacruz'),
    path('passaefica', views.passaefica, name='municipio/passaefica'),
    path('passagem', views.passagem, name='municipio/passagem'),
    path('pedrovelho', views.pedrovelho, name='municipio/pedrovelho'),
    path('santoantonio', views.santoantonio, name='municipio/santoantonio'),
    path('saojosedocampestre', views.saojosedocampestre, name='municipio/saojosedocampestre'),
    path('serradesaobento', views.serradesaobento, name='municipio/serradesaobento'),
    path('serrinha', views.serrinha, name='municipio/serrinha'),
    path('varzea', views.varzea, name='municipio/varzea'),
    path('barcelona', views.barcelona, name='municipio/barcelona'),
    path('bomjesus', views.bomjesus, name='municipio/bomjesus'),
    path('caicaradoriodovento', views.caicaradoriodovento, name='municipio/caicaradoriodovento'),
    path('ielmomarinho', views.ielmomarinho, name='municipio/ielmomarinho'),
    path('lagoadevelhos', views.lagoadevelhos, name='municipio/lagoadevelhos'),
    path('riachuelo', views.riachuelo, name='municipio/riachuelo'),
    path('ruybarbosa', views.ruybarbosa, name='municipio/ruybarbosa'),
    path('santamaria', views.santamaria, name='municipio/santamaria'),
    path('saopaulodopotengi', views.saopaulodopotengi, name='municipio/saopaulodopotengi'),
    path('saopedro', views.saopedro, name='municipio/saopedro'),
    path('saotome', views.saotome, name='municipio/saotome'),
    path('senadoreloidesouza', views.senadoreloidesouza, name='municipio/senadoreloidesouza'),
    path('serracaiada', views.serracaiada, name='municipio/serracaiada'),
    path('cearamirim', views.cearamirim, name='municipio/cearamirim'),
    path('maxaranguape', views.maxaranguape, name='municipio/maxaranguape'),
    path('pureza', views.pureza, name='municipio/pureza'),
    path('riodofogo', views.riodofogo, name='municipio/riodofogo'),
    path('saomigueldogostoso', views.saomigueldogostoso, name='municipio/saomigueldogostoso'),
    path('taipu', views.taipu, name='municipio/taipu'),
    path('touros', views.touros, name='municipio/touros'),
    path('altodorodrigues', views.altodorodrigues, name='municipio/altodorodrigues'),
    path('galinhos', views.galinhos, name='municipio/galinhos'),
    path('guamare', views.guamare, name='municipio/guamare'),
    path('macau', views.macau, name='municipio/macau'),
    path('pendencias', views.pendencias, name='municipio/pendencias'),
    path('portodomangue', views.portodomangue, name='municipio/portodomangue'),
    path('camporedondo', views.camporedondo, name='municipio/camporedondo'),
    path('coronelezequiel', views.coronelezequiel, name='municipio/coronelezequiel'),
    path('jacana', views.jacana, name='municipio/jacana'),
    path('japi', views.japi, name='municipio/japi'),
    path('lajespintadas', views.lajespintadas, name='municipio/lajespintadas'),
    path('santacruz', views.santacruz, name='municipio/santacruz'),
    path('saobentodotrairi', views.saobentodotrairi, name='municipio/saobentodotrairi'),
    path('sitionovo', views.sitionovo, name='municipio/sitionovo'),
    path('tangara', views.tangara, name='municipio/tangara'),
    path('afonsobezerra', views.afonsobezerra, name='municipio/afonsobezerra'),
    path('angicos', views.angicos, name='municipio/angicos'),
    path('bodo', views.bodo, name='municipio/bodo'),
    path('fernandopedroza', views.fernandopedroza, name='municipio/fernandopedroza'),
    path('lajes', views.lajes, name='municipio/lajes'),
    path('pedroavelino', views.pedroavelino, name='municipio/pedroavelino'),
    path('santanadomatos', views.santanadomatos, name='municipio/santanadomatos'),
    path('acari', views.acari, name='municipio/acari'),
    path('carnaubadosdantas', views.carnaubadosdantas, name='municipio/carnaubadosdantas'),
    path('cerrocora', views.cerrocora, name='municipio/cerrocora'),
    path('cruzeta', views.cruzeta, name='municipio/cruzeta'),
    path('curraisnovos', views.curraisnovos, name='municipio/curraisnovos'),
    path('equador', views.equador, name='municipio/equador'),
    path('florania', views.florania, name='municipio/florania'),
    path('lagoanova', views.lagoanova, name='municipio/lagoanova'),
    path('parelhas', views.parelhas, name='municipio/parelhas'),
    path('santanadoserido', views.santanadoserido, name='municipio/santanadoserido'),
    path('saovicente', views.saovicente, name='municipio/saovicente'),
    path('tenentelaurentinocruz', views.tenentelaurentinocruz, name='municipio/tenentelaurentinocruz'),
    path('caico', views.caico, name='municipio/caico'),
    path('ipueira', views.ipueira, name='municipio/ipueira'),
    path('jardimdepiranhas', views.jardimdepiranhas, name='municipio/jardimdepiranhas'),
    path('jardimdoserido', views.jardimdoserido, name='municipio/jardimdoserido'),
    path('jucurutu', views.jucurutu, name='municipio/jucurutu'),
    path('ourobranco', views.ourobranco, name='municipio/ourobranco'),
    path('saofernando', views.saofernando, name='municipio/saofernando'),
    path('saojoaodosabugi', views.saojoaodosabugi, name='municipio/saojoaodosabugi'),
    path('saojosedoserido', views.saojosedoserido, name='municipio/saojosedoserido'),
    path('serranegradonorte', views.serranegradonorte, name='municipio/serranegradonorte'),
    path('timbaubadobatistas', views.timbaubadobatistas, name='municipio/timbaubadobatistas'),
    path('assu', views.assu, name='municipio/assu'),
    path('campogrande', views.campogrande, name='municipio/campogrande'),
    path('carnaubais', views.carnaubais, name='municipio/carnaubais'),
    path('ipanguacu', views.ipanguacu, name='municipio/ipanguacu'),
    path('itaja', views.itaja, name='municipio/itaja'),
    path('parau', views.parau, name='municipio/parau'),
    path('saorafael', views.saorafael, name='municipio/saorafael'),
    path('triunfopotiguar', views.triunfopotiguar, name='municipio/triunfopotiguar'),
    path('areiabranca', views.areiabranca, name='municipio/areiabranca'),
    path('barauna', views.barauna, name='municipio/barauna'),
    path('governadordixseptrosado', views.governadordixseptrosado, name='municipio/governadordixseptrosado'),
    path('grossos', views.grossos, name='municipio/grossos'),
    path('mossoro', views.mossoro, name='municipio/mossoro'),
    path('serradomel', views.serradomel, name='municipio/serradomel'),
    path('tibau', views.tibau, name='municipio/tibau'),
    path('upanema', views.upanema, name='municipio/upanema'),
    path('apodi', views.apodi, name='municipio/apodi'),
    path('caraubas', views.caraubas, name='municipio/caraubas'),
    path('felipeguerra', views.felipeguerra, name='municipio/felipeguerra'),
    path('itau', views.itau, name='municipio/itau'),
    path('rodolfofernandes', views.rodolfofernandes, name='municipio/rodolfofernandes'),
    path('severianomelo', views.severianomelo, name='municipio/severianomelo'),
    path('taboleirogrande', views.taboleirogrande, name='municipio/taboleirogrande'),
    path('alminoafonso', views.alminoafonso, name='municipio/alminoafonso'),
    path('antoniomartins', views.antoniomartins, name='municipio/antoniomartins'),
    path('frutuosogomes', views.frutuosogomes, name='municipio/frutuosogomes'),
    path('janduis', views.janduis, name='municipio/janduis'),
    path('joaodias', views.joaodias, name='municipio/joaodias'),
    path('lucrecia', views.lucrecia, name='municipio/lucrecia'),
    path('martins', views.martins, name='municipio/martins'),
    path('messiastargino', views.messiastargino, name='municipio/messiastargino'),
    path('olhodaguadoborges', views.olhodaguadoborges, name='municipio/olhodaguadoborges'),
    path('patu', views.patu, name='municipio/patu'),
    path('rafaelgodeiro', views.rafaelgodeiro, name='municipio/rafaelgodeiro'),
    path('riachodacruz', views.riachodacruz, name='municipio/riachodacruz'),
    path('serrinhadospintos', views.serrinhadospintos, name='municipio/serrinhadospintos'),
    path('umarizal', views.umarizal, name='municipio/umarizal'),
    path('vicosa', views.vicosa, name='municipio/vicosa'),
    path('aguanova', views.aguanova, name='municipio/aguanova'),
    path('alexandria', views.alexandria, name='municipio/alexandria'),
    path('coroneljoaopessoa', views.coroneljoaopessoa, name='municipio/coroneljoaopessoa'),
    path('doutorseveriano', views.doutorseveriano, name='municipio/doutorseveriano'),
    path('encanto', views.encanto, name='municipio/encanto'),
    path('franciscodantas', views.franciscodantas, name='municipio/franciscodantas'),
    path('josedapenha', views.josedapenha, name='municipio/josedapenha'),
    path('luisgomes', views.luisgomes, name='municipio/luisgomes'),
    path('majorsales', views.majorsales, name='municipio/majorsales'),
    path('marcelinovieira', views.marcelinovieira, name='municipio/marcelinovieira'),
    path('parana', views.parana, name='municipio/parana'),
    path('paudosferros', views.paudosferros, name='municipio/paudosferros'),
    path('piloes', views.piloes, name='municipio/piloes'),
    path('portalegre', views.portalegre, name='municipio/portalegre'),
    path('rafaelfernandes', views.rafaelfernandes, name='municipio/rafaelfernandes'),
    path('riachodesantana', views.riachodesantana, name='municipio/riachodesantana'),
    path('saofranciscodooeste', views.saofranciscodooeste, name='municipio/saofranciscodooeste'),
    path('saomiguel', views.saomiguel, name='municipio/saomiguel'),
    path('tenenteananias', views.tenenteananias, name='municipio/tenenteananias'),
    path('venhaver', views.venhaver, name='municipio/venhaver'),
    path('caicaradonorte', views.caicaradonorte, name='municipio/caicaradonorte'),
    path('bentofernandes', views.bentofernandes, name='municipio/bentofernandes'),
    path('jandaira', views.jandaira, name='municipio/jandaira'),
    path('jardimdeangicos', views.jardimdeangicos, name='municipio/jardimdeangicos'),
    path('joaocamara', views.joaocamara, name='municipio/joaocamara'),
    path('parazinho', views.parazinho, name='municipio/parazinho'),
    path('pedragrande', views.pedragrande, name='municipio/pedragrande'),
    path('pedrapreta', views.pedrapreta, name='municipio/pedrapreta'),
    path('pocobranco', views.pocobranco, name='municipio/pocobranco'),
    path('saobentodonorte', views.saobentodonorte, name='municipio/saobentodonorte'),
]