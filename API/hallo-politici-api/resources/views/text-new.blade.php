@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-body">
                        <a href="/home" class="btn btn-info">< Terug</a>
                        <h1>Nieuwe tekst toevoegen</h1>

                        <div class="alert alert-info">Wilt u de naam van een gebruiker weergeven binnen uw zin? Gebruik dan <strong>__GEBRUIKER__</strong> op de plaats waar u deze wilt weergeven.</div>

                        @if (count($errors) > 0)
                            <div class="alert alert-danger">
                                <ul>
                                    @foreach ($errors->all() as $error)
                                        <li>{{ $error }}</li>
                                    @endforeach
                                </ul>
                            </div>
                        @endif

                        {!! Form::open(['url' => Request::fullUrl() ]) !!}
                        <div class="form-group">
                            <div class="col-md-10 col-md-offset-1 form-control-buffer">
                                {{ Form::label('tekst', 'Tekst') }}
                                {{ Form::text('tekst', "",['class' => 'form-control', 'autofocus']) }}
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-md-10 col-md-offset-1">
                                {{ Form::submit('Tekst toevoegen', ['class' => 'form-control btn btn-success']) }}
                            </div>
                        </div>

                        {!! Form::close() !!}
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection