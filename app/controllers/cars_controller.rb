class CarsController < ApplicationController
	def index
		@cars = Car.all
	end

	def new
		@cars = Car.new
	end
end
