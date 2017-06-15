'use strict';

describe('ng-really', function () {
  var scope, $compile, $rootScope, $timeout, element;

  function createDirective(template) {
    var elm;

    elm = angular.element(template);
    angular.element(document.body).prepend(elm);
    $compile(elm)(scope);
    scope.$digest();

    return elm;
  }

  beforeEach(module('ngSanitize', 'ngReally'));
  beforeEach(inject(function(_$rootScope_, _$compile_, _$timeout_) {
    $rootScope = _$rootScope_;
    scope = $rootScope.$new();
    $compile = _$compile_;
    $timeout = _$timeout_;

    scope.confirmedAction = jasmine.createSpy('confirmedAction');
  }));

  afterEach(function () {
    if (element) element.remove();
  });

  var template = '<button type="button" ng-really ng-really-confirm-label="Really?" ng-really-confirmed-action="confirmedAction()">Delete</button>';
  var templateWithTimeout = '<button type="button" ng-really ng-really-confirm-label="Really?" ng-really-confirmed-action="confirmedAction()" ng-really-timeout="500">Delete</button>';
  var templateWithExpressionAsDefaultLabel = '<button type="button" ng-really ng-really-confirm-label="Really?" ng-really-confirmed-action="confirmedAction()">{{ 1 + 2 }}</button>';

  describe('when created', function () {
    it('should display default label', function () {
      element = createDirective(template);

      expect(element.text()).toEqual('Delete');
    });

    it('should display compiled expression default label', function () {
      element = createDirective(templateWithExpressionAsDefaultLabel);

      expect(element.text()).toEqual('3');
    });
  });

  describe('when first clicked', function() {
    it('should display confirm label', function () {
      element = createDirective(template);
      element.triggerHandler('click');

      expect(element.text()).toEqual('Really?');
    });

    it('should not execute confirmedAction', function () {
      element = createDirective(template);
      element.triggerHandler('click');

      expect(scope.confirmedAction).not.toHaveBeenCalled();
    });

    it('should go back to inital state after timeout', function () {
      element = createDirective(templateWithTimeout);
      element.triggerHandler('click');

      $timeout.flush();
      expect(element.text()).toEqual('Delete');
    });
  });

  describe('when clicked second time', function() {
    it('should execute confirmed action', function () {
      element = createDirective(template);
      element.triggerHandler('click');
      element.triggerHandler('click');

      expect(scope.confirmedAction).toHaveBeenCalled();
    });

    it('should go back to initial state', function () {
      element = createDirective(template);
      element.triggerHandler('click');
      element.triggerHandler('click');

      expect(element.text()).toEqual('Delete');
    });

    it('should go back to compiled expression initial state', function () {
      element = createDirective(templateWithExpressionAsDefaultLabel);

      expect(element.text()).toEqual('3');
    });
  });


});