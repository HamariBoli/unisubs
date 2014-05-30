// Amara, universalsubtitles.org
//
// Copyright (C) 2013 Participatory Culture Foundation
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see
// http://www.gnu.org/licenses/agpl-3.0.html.

(function() {

    var module = angular.module('amara.SubtitleEditor.collab', []);

    module.controller('CollabController', function($scope, $sce, $timeout, EditorData) {
        $scope.canApprove = function() {
            return $scope.workingSubtitles.subtitleList.isComplete();
        }

        $scope.errorMessage = function() {
            if(!$scope.canApprove()) {
                return 'Some of the lines do not have text or timing. Please complete all the lines before accepting subtitles or send them back.';
            }
            return null;
        }
    });
}).call(this);
