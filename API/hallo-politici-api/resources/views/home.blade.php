@extends('layouts.app')

@section('content')
    <style media="screen">
        .bigger {
            font-size: 2em;
            margin-right: 30px;
        }
        .center {
            text-align: center;
        }
    </style>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Tekstjes voor afbeeldingen</div>

                    <div class="panel-body">
                        <p>Hieronder ziet u alle huidge tekstjes die personen kunnen kiezen om over de afbeelding van een politicus te plaatsen.</p>
                        <a href="/text/new" class="btn btn-success"><i class="fa fa-plus"></i> Nieuw tekstje toevoegen</a>
                        @if(!empty($textItems))
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th>Tekst</th>
                                        <th>Aanpassen/Verwijderen</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($textItems as $item)
                                        <tr>
                                            <td>{{$item->tekst}}</td>

                                            <td class="center">
                                                <a href=<?php echo "text/edit/" . $item->id ?>><i class="fa fa-pencil-square-o color-blue bigger"></i></a>
                                                <a href=<?php echo "text/delete/" . $item->id ?>><i style="color:red" class="fa fa-times bigger"></i></a>
                                            </td>
                                        </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        @else
                            <div class="alert alert-info">U hebt momenteel nog geen tekstjes</div>
                        @endif
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
