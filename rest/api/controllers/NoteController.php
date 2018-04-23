<?php

namespace api\controllers;

use yii\filters\AccessControl;
use yii\web\Response;
use yii\filters\ContentNegotiator;
use yii\rest\ActiveController;
use yii\filters\Cors;
use yii\web\ForbiddenHttpException;

class NoteController extends ActiveController
{
    public $modelClass = 'api\models\Note';
    public $serializer = [
        'class' => 'yii\rest\Serializer',
        'collectionEnvelope' => 'items',
    ];

    public function behaviors()
    {
        $behaviors = parent::behaviors();
        $behaviors['corsFilter' ] = [
            'class' => Cors::className(),
        ];
        $behaviors['contentNegotiator'] = [
            'class' => ContentNegotiator::className(),
            'formats' => [
                'application/json' => Response::FORMAT_JSON,
            ],
        ];
        // $behaviors['access'] = [
        //     'class' => AccessControl::className(),
        //     'only' => ['create', 'update', 'delete'],
        //     'rules' => [
        //         [
        //             'actions' => ['create', 'update', 'delete'],
        //             'allow' => true,
        //             'roles' => ['@'],
        //         ],
        //     ],
        // ];
        return $behaviors;
    }


}
